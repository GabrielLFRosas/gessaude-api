import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamCPF = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().params.cpf;
  },
);
