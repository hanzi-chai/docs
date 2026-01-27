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
			tableOfContents: {
				minHeadingLevel: 1,
				maxHeadingLevel: 3,
			},
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
						{ label: '生成元素序列表和码表', slug: 'tutorial/encode' },
						{ label: '自定义字形数据', slug: 'tutorial/data' },
						{ label: '优化方案', slug: 'tutorial/optimization' },
						{ label: '查看统计数据', slug: 'tutorial/statistics' },
						{ label: '和现有码表校对', slug: 'tutorial/debug' },
						{ label: '生成字根图', slug: 'tutorial/diagram' },
					],
				},
				{
					label: '参考',
					items: [
						{ label: '配置项', slug: 'reference/config' },
						{ label: "拆分算法", slug: 'reference/algorithm' },
						{ label: 'API', slug: 'reference/api' },
						{ label: '数据', slug: 'reference/data' },
					],
				},
        typeDocSidebarGroup,
			],
		}),
	],
});
