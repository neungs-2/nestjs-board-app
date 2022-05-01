import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// Custom Decorator 생성!!
// ctx는 context의 약어
export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
