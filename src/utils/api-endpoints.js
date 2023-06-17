export const API_ENDPOINTS = {
  LOGIN: "/auth/login",
  // PRODUCT
  GET_ALL_PRODUCTS: "/product/",
  CREATE_PRODUCT: "/product/",
  UPLOAD_SKETCH_PRODUCT: "/product/image/denah/upload/",
  UPLOAD_IMAGES_PRODUCT: "/product/image/slide/upload/",
  DELETE_IMAGES_PRODUCT: "/product/images/array?images=",
  DELETE_PRODUCT: "/product/",
  // CUSTOMER
  CREATE_CUSTOMER: "/customer/",
  // USER
  GET_ALL_USERS: "/user/",
  GET_USER: "/user/",
  CREATE_USER: "/user/",
  UPDATE_USER: "/user/",
  DELETE_USER: "/user/",
  //GALLERY
  GET_ALL_GALLERY: "/gallery",
  POST_GALLERY_TITLE: "/gallery",
  POST_GALLERY_IMAGE: "/gallery/image/upload/",
  PATCH_GALLERY_TITLE: "/gallery/",
  DELETE_GALLERY: "/gallery/",
  DELETE_GALLERY_IMAGE: "/gallery/image/",
  DELETE_GALLERY_IMAGE_ARRAY: "/gallery/images/array",
  //PARTNER
  GET_ALL_PARTNER: "/partner",
  POST_PARTNER: "/partner",
  POST_PARTNER_IMAGE: "/partner/image/upload/",
  PATCH_PARTNER: "/partner/",
  DELETE_PARTNER: "/partner/",
  // BLOG
  GET_BLOG: "/blog",
  POST_BLOG: "/blog",
  PATCH_BLOG: "/blog",
  DELETE_BLOG: "/blog",
  POST_IMAGE_BLOG: "/blog/image/upload/",
  //PROMO
  GET_PROMO: "/promo",
  POST_PROMO: "/promo",
  PATCH_PROMO: "/promo",
  DELETE_PROMO: "/promo",
  POST_IMAGE_PROMO: "/promo/image/upload/",
};
