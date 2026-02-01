// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
		starlight({
			title: '汉字自动拆分系统文档',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			tableOfContents: {
				minHeadingLevel: 1,
				maxHeadingLevel: 3,
			},
			customCss: [
				'./src/index.css',
			],
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
					entryPoints: ['hanzi-chai/packages/hanzi-chai/src/index.ts'],
					tsconfig: 'hanzi-chai/packages/hanzi-chai/tsconfig.json',
				}),
			],
			sidebar: [
				{
					label: '用户文档',
					autogenerate: { directory: "tutorial" }
				},
				{
					label: '开发文档',
					autogenerate: { directory: "development" }
				},
				typeDocSidebarGroup,
			],
		}),
	],
});
