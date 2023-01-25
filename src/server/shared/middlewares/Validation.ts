import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SchemaOf, ValidationError } from 'yup';

type TProperty = 'body'| 'header' | 'params'| 'query';

type TAllSchemas = Record<TProperty,SchemaOf<any> >

type TValidation = (scheme: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (scheme) =>{
  return  async (req, res, next) =>{
    const errorsResult: Record< string, Record<string,string>> ={}
    Object.entries(scheme).forEach(([key, scheme]) =>{
      try {
        scheme.validateSync(req[key as TProperty], {abortEarly: false})

      } catch (error) {
        const yupError = error as ValidationError;
        const errors : Record<string,string> ={};
        yupError.inner.forEach((error) =>{
          if(!error.path) return;
          errors[error.path] = error.message;
        })
        errorsResult[key] = errors;

      }
    }
    )
    if(Object.entries(errorsResult).length === 0){
      return next()
    }else {
      return res.status(StatusCodes.BAD_REQUEST).json({errors : errorsResult})

    }

}}