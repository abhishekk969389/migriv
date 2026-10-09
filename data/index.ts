import migrivoData from "./migrivo.json";

export type RawMigrivoData = typeof migrivoData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

const sec = migrivoData.MigrivoConsultancy.sections;

export type MigrivoBrandData = typeof sec.Brand.variants.MigrivoBrand1;
export type MigrivoTopBarData = typeof sec.TopBar.variants.MigrivoTopBar1;
export type MigrivoHeaderData = typeof sec.Header.variants.MigrivoHeader1;
export type MigrivoBannerData = typeof sec.Banner.variants.MigrivoBanner1;
export type MigrivoAboutData = typeof sec.AboutSection.variants.MigrivoAbout1;
export type MigrivoProcessData = typeof sec.Process.variants.MigrivoProcess1;
export type MigrivoServicesData = typeof sec.Services.variants.MigrivoServices1;
export type MigrivoDestinationsData = typeof sec.Destinations.variants.MigrivoDestinations1;
export type MigrivoTestimonialData = typeof sec.Testimonial.variants.MigrivoTestimonial1;
export type MigrivoCtaData = typeof sec.CtaSection.variants.MigrivoCta1;
export type MigrivoBlogData = typeof sec.Blog.variants.MigrivoBlog1;
export type MigrivoFooterData = typeof sec.Footer.variants.MigrivoFooter1;
export type MigrivoSubBannersData = typeof sec.SubBanners.variants.MigrivoSubBanners1;
export type MigrivoAboutPageData = typeof sec.AboutPage.variants.MigrivoAboutPage1;
export type MigrivoBlogListData = typeof sec.BlogList.variants.MigrivoBlogList1;
export type MigrivoContactPageData = typeof sec.ContactPage.variants.MigrivoContactPage1;
export type MigrivoEnquiryPageData = typeof sec.EnquiryPage.variants.MigrivoEnquiryPage1;
export type MigrivoGalleryPageData = typeof sec.GalleryPage.variants.MigrivoGalleryPage1;
export type MigrivoThankuPageData = typeof sec.ThankuPage.variants.MigrivoThankuPage1;
export type MigrivoServiceDetailsData = typeof sec.ServiceDetails.variants.MigrivoServiceDetails1.services[0];
export type MigrivoDestinationDetailsData = typeof sec.DestinationDetails.variants.MigrivoDestinationDetails1.countries[0];
export type MigrivoBlogDetailsData = typeof sec.BlogDetails.variants.MigrivoBlogDetails1.blogs[0];

export const site = {
  brand: sec.Brand.variants.MigrivoBrand1,
  topBar: sec.TopBar.variants.MigrivoTopBar1,
  navbar: sec.Header.variants.MigrivoHeader1,
  banner: sec.Banner.variants.MigrivoBanner1,
  about: sec.AboutSection.variants.MigrivoAbout1,
  process: sec.Process.variants.MigrivoProcess1,
  services: sec.Services.variants.MigrivoServices1,
  destinations: sec.Destinations.variants.MigrivoDestinations1,
  testimonial: sec.Testimonial.variants.MigrivoTestimonial1,
  cta: sec.CtaSection.variants.MigrivoCta1,
  blogs: sec.Blog.variants.MigrivoBlog1,
  footer: sec.Footer.variants.MigrivoFooter1,
  subBanners: sec.SubBanners.variants.MigrivoSubBanners1,
  aboutPage: sec.AboutPage.variants.MigrivoAboutPage1,
  blogList: sec.BlogList.variants.MigrivoBlogList1,
  contactPage: sec.ContactPage.variants.MigrivoContactPage1,
  enquiryPage: sec.EnquiryPage.variants.MigrivoEnquiryPage1,
  galleryPage: sec.GalleryPage.variants.MigrivoGalleryPage1,
  thankuPage: sec.ThankuPage.variants.MigrivoThankuPage1,
  serviceDetails: sec.ServiceDetails.variants.MigrivoServiceDetails1.services,
  destinationDetails: sec.DestinationDetails.variants.MigrivoDestinationDetails1.countries,
  blogDetails: sec.BlogDetails.variants.MigrivoBlogDetails1.blogs,
};

export default migrivoData;
