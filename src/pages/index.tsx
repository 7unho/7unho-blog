import {
  getAllSelectItemsFromPosts,
  filterPosts,
} from "@/src/libs/utils/notion"
import Layout from "@components/Layout"
import Feed from "@containers/Feed"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { TCategories, TPosts, TTags } from "../types"
import { getPosts } from "../libs/apis"
import { DEFAULT_CATEGORY } from "../constants"

export async function getStaticProps() {
  try {
    const posts = await getPosts()
    const filteredPost = filterPosts(posts)
    const tags = getAllSelectItemsFromPosts("tags", filteredPost)
    const categories = getAllSelectItemsFromPosts("category", filteredPost)

    return {
      props: {
        tags: {
          ...tags,
        },
        categories: {
          [DEFAULT_CATEGORY]: filteredPost.length,
          ...categories,
        },
        posts: filteredPost,
      },
      revalidate: 1,
    }
  } catch (error) {
    throw error
  }
}

type Props = {
  categories: TCategories
  tags: TTags
  posts: TPosts
}

const FeedPage: NextPageWithLayout<Props> = ({ categories, tags, posts }) => {
  return <Feed categories={categories} tags={tags} posts={posts} />
}

FeedPage.getLayout = function getlayout(page) {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }}
    >
      {page}
      <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2F7unho.blog&count_bg=%23DCE1D8&title_bg=%23555555&icon=trustpilot.svg&icon_color=%23E7E6E2&title=Todays&edge_flat=false"/></a>
    </Layout>
  )
}

export default FeedPage
