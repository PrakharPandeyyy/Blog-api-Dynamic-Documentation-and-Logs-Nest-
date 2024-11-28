"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../auth/providers/auth.service");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async createUser(createUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        let newUser = this.userRepository.create(createUserDto);
        newUser = await this.userRepository.save(newUser);
        return newUser;
    }
    findAll(getUserParamDto, limit, page) {
        return [
            {
                firstName: 'John',
                email: 'john@doe.com',
            },
            {
                firstName: 'Jane',
                email: 'jane@doe.com',
            },
        ];
    }
    async findOneById(id) {
        return {
            id: 1234,
            firstName: 'John',
            email: 'john@doe.com',
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map