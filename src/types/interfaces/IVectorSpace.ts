import IEntry from './IEntry';

interface IVectorSpace {
  plugin(): IEntry[];
  data: object[];
  space: IEntry[];
}

export default IVectorSpace;
