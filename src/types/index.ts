export type Fipe = {
  codigo: string;
  nome: string;
};

export type Models = {
  anos: Fipe[];
  modelos: Fipe[];
};

export type DetailsFipe = {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
};
