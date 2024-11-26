export interface IProductSeller {
  Id: string;
  userSellerProductDTO: UserSellerProductProps;
  UserSellerProductId: string;
  ProductId: string;
}

interface UserSellerProductProps {
  id: string;
  name: string;
  imgPerfil: string;
  imgPerfilPublicId: string;
  imgFloating: string;
  imgFloatingPublicId: string;
  lastLogin: string;
  reviews: number;
  chatResponseRate: number;
  accountCreationDate: string;
  quantityOfProductSold: number;
  usuallyRespondsToChatIn: string;
  followers: number;
}