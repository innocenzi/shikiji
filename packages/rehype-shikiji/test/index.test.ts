import fs from 'node:fs/promises'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { expect, test } from 'vitest'
import rehypeShikiji from '../src'

test('run', async () => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShikiji, {
      theme: 'vitesse-light',
    })
    .use(rehypeStringify)
    .process(await fs.readFile(new URL('./fixtures/a.md', import.meta.url)))

  expect(file.toString()).toMatchFileSnapshot('./fixtures/a.out.html')
})
