// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '汉字自动拆分系统文档',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      plugins: [
        // Generate the documentation.
        starlightTypeDoc({
          entryPoints: ['hanzi-chai/packages/hanzi-chai/src/index.ts'],
          tsconfig: 'hanzi-chai/packages/hanzi-chai/tsconfig.json',
        }),
      ],
			sidebar: [
				{
					label: '教程',
					items: [
						{ label: '快速开始', slug: 'tutorial' },
						{ label: '设计方案的元素', slug: 'tutorial/element' },
						{ label: '配置拆分方式', slug: 'tutorial/analysis' },
						{ label: '自定义字形数据', slug: 'tutorial/data' },
					],
				},
				{
					label: '参考',
					items: [
						{ label: "算法参考", slug: 'reference/algorithm' },
						{ label: '配置项', slug: 'reference/config' },
						{ label: 'API 参考', slug: 'reference/api' },
						{ label: '数据', slug: 'reference/data' },
					],
				},
        typeDocSidebarGroup,
			],
		}),
	],
});
