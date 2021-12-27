import {
  IMiddleware,
  IRequest,
  IResponse,
} from '@iotakingdoms/core';

export class ErrorMiddleware implements IMiddleware {
  public async canHandle(req: IRequest, res: IResponse): Promise<boolean> {
    return true;
  }

  public async handle(req: IRequest, res: IResponse): Promise<boolean> {
    res.headers.set('Server', 'ts-api');
    res.headers.set('Content-Type', 'application/json');
    res.statusCode = 500;
    res.body = JSON.stringify({ error: 'Something went wrong' });
    return false;
  }
}
