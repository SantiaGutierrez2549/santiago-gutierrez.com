import news from './document/news'
import project from './document/projects'
import about from './page/about'
import home from './page/home'
import settings from './page/settings'
import assetInfo from './type/assetInfo'
import bannerInfo from './type/bannerInfo'
import content from './type/content'
import description from './type/description'
import fontInfo from './type/fontInfo'
import imageInfo from './type/imageInfo'
import instrument from './type/instrument'
import rawAssetInfo from './type/rawAssetInfo'
import workInfo from './type/workInfo'

const documents = [news, project]

const pages = [about, settings, home]

const types = [
  assetInfo,
  bannerInfo,
  content,
  description,
  imageInfo,
  rawAssetInfo,
  fontInfo,
  workInfo,
  instrument
]

export const schema = {
  types: [...documents, ...pages, ...types]
}
