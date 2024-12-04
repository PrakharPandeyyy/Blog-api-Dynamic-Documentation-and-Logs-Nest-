import { Inject, Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { Paginated } from '../interfaces/paginated.interface';
@Injectable()
export class PaginationProvider {
  constructor(
    /**
     * Injecting Request
     */
    @Inject(REQUEST)
    private readonly request: Request,
  ) {}
  async paginateQuery<T extends ObjectLiteral>(
    paginationQuery: PaginationQueryDto,
    repository: Repository<T>,
  ): Promise<Paginated<T>> {
    const results = await repository.find({
      // relations: {
      //   metaOptions: true, // <--- This is the relation that we want to load
      //   // author: true,
      //   // tags: true,
      // },
      skip: (paginationQuery.page - 1) * paginationQuery.limit,
      take: paginationQuery.limit,
    });
    /**
     * Create the request URL
     */
    const baseURL = this.request.protocol + '://' + this.request.get('host');
    const newURL = new URL(this.request.url, baseURL);
    /**
     * Calculating Page numbers
     */
    const totalItems = await repository.count();
    const totalPage = Math.ceil(totalItems / paginationQuery.limit);
    const nextPage =
      paginationQuery.page === totalPage
        ? paginationQuery.page
        : paginationQuery.page + 1;
    const prevPage =
      paginationQuery.page === 1
        ? paginationQuery.page
        : paginationQuery.page - 1;
    /**
     * Final Response
     */
    const finalResponse: Paginated<T> = {
      data: results,
      meta: {
        itemsPerPage: paginationQuery.limit,
        totalItems: totalItems,
        currentPage: paginationQuery.page,
        totalPage: totalPage,
      },
      links: {
        first: `${newURL.origin}${newURL.pathname}?page=1&limit=${paginationQuery.limit}`,
        last: `${newURL.origin}${newURL.pathname}?page=${totalPage}&limit=${paginationQuery.limit}`,
        current: `${newURL.origin}${newURL.pathname}?page=${paginationQuery.page}&limit=${paginationQuery.limit}`,
        next: `${newURL.origin}${newURL.pathname}?page=${nextPage}&limit=${paginationQuery.limit}`,
        previous: `${newURL.origin}${newURL.pathname}?page=${prevPage}&limit=${paginationQuery.limit}`,
      },
    };
    return finalResponse;
  }
}
