import { Post } from 'src/posts/entities/post-entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json', nullable: false })
  metaValue: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToOne(() => Post, (post) => post.metaOptions, {
    // Inverse Relationship // bidirectional relationship // to load the relation and the other option if for  teeling the entity that metaOptions lies on the Post entity
    onDelete: 'CASCADE', // this will delete the meta option when the post is deleted
  })
  @JoinColumn() // it is important to specify the column that will be used as a foreign key
  post: Post;
}
