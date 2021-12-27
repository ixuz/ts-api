import {
  IMiddleware,
  IRequest,
  IResponse,
} from '@iotakingdoms/core';

export class NotFoundMiddleware implements IMiddleware {
  public async canHandle(req: IRequest, res: IResponse): Promise<boolean> {
    return !(res.statusCode >= 500 && res.statusCode <= 599);
  }

  public async handle(req: IRequest, res: IResponse): Promise<boolean> {
    res.headers.set('Server', 'ts-api');
    res.headers.set('Content-Type', 'application/json');
    res.statusCode = 404;
    res.body = JSON.stringify({ error: 'Not found' });
    return false;
  }
}
