interface IBaseException {
  message: string,
  status: number
}

export default class BaseException extends Error {
  attributes: IBaseException;
  
  constructor(attributes: IBaseException) {
    super(attributes.message);
    this.attributes = attributes;
  }
}