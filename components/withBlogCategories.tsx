import { useTranslations } from 'next-intl';
import type { ComponentProps, FC } from 'react';

import BlogPostCard from '@/components/Common/BlogPostCard';
import LinkTabs from '@/components/Common/LinkTabs';
import Pagination from '@/components/Common/Pagination';
import type { BlogPostsRSC } from '@/types';

type WithBlogCategoriesProps = {
  categories: ComponentProps<typeof LinkTabs>['tabs'];
  blogData: BlogPostsRSC & { category: string; page: number };
};

// @todo: there might be a better place to export this and
// we should check about the future of GitHub avatars
// and mapping them to the respective users
// @see https://github.com/nodejs/nodejs.dev/blob/main/src/data/blog/authors.yaml
export const mapAuthorToCardAuthors = (author: string) => {
  const authors = author.split(/, | and |;| by /i);

  return authors.map(fullName => ({
    fullName,
    src: `https://ui-avatars.com/api/?name=${fullName}`,
  }));
};

const mapPaginationPages = (category: string, pages: number) =>
  [...Array(pages).keys()].map(page => ({
    url: `/blog/${category}/page/${page + 1}`,
  }));

const WithBlogCategories: FC<WithBlogCategoriesProps> = ({
  categories,
  blogData,
}) => {
  const t = useTranslations();

  return (
    <>
      <LinkTabs
        label={t('layouts.blog.selectCategory')}
        tabs={categories}
        activeTab={blogData.category}
      >
        <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(spacing.80),1fr))] [grid-gap:theme(spacing.12)_theme(spacing.8)]">
          {blogData.posts.map(post => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              category={post.categories[0]}
              authors={mapAuthorToCardAuthors(post.author)}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </LinkTabs>

      <div className="mt-8 border-t border-t-neutral-200 pt-5 dark:border-t-neutral-900">
        <Pagination
          currentPage={blogData.page}
          pages={mapPaginationPages(
            blogData.category,
            blogData.pagination.pages
          )}
        />
      </div>
    </>
  );
};

export default WithBlogCategories;
