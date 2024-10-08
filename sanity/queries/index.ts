import { groq } from 'next-sanity'

export const settingsQuery = groq`*[_type == 'settings'][0]`
export const socialsQuery = groq`*[_type == 'about']{socials}[0]`
export const postsQuery = groq`*[_type == 'news' && newsType == 'post']{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content}`
export const postQuery = groq`*[_type == 'news' && slug.current == $slug][0]{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content }`
export const eventsQuery = groq`*[_type == 'news' && newsType == 'event']{_id, 'slug': slug.current, title, subtitle, banner, date, 'category': category->slug.current}`
export const eventQuery = groq`*[_type == 'news' && slug.current == $slug][0]{
  _id, title, subtitle, banner, content, date, 'slug': slug.current, 'category': category->slug.current
}`
export const projectsQuery = groq`*[_type == 'projects']{
  ..., 'slug': slug.current
}`
export const projectQuery = groq`*[_type == 'projects' && slug.current == $slug][0]{
  _id, title, subtitle, banner, date, 'slug': slug.current, 'category': category->slug.current, content
}`
export const aboutQuery = groq`*[_type == 'about'][0]`
export const aboutSelectQuery = groq`{ 'value': *[_type == 'about'][0][$key] }`
export const homeQuery = groq`*[_type == 'home'][0]{ ..., 'highlights': highlights[]->, 'featuredWorks': featuredWorks[]->, 'upcomingWorks': upcomingWorks[]-> }`
