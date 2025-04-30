import { ContentfulContentSource } from '@stackbit/cms-contentful';

const config = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    }),
  ],
  models: {
    page: {
      type: 'page',
      urlPath: '/{slug}',
      fields: {
        title: { type: 'string', required: true },
        slug: { type: 'string', required: true },
        sections: { 
          type: 'list', 
          items: { 
            type: 'reference',
            models: ['hero', 'stats']
          }
        }
      }
    },
    hero: {
      type: 'data',
      label: 'Hero',
      labelField: 'heading',
      fields: {
        heading: { type: 'string', required: true },
        body: { type: 'markdown' },
        image: { type: 'image', required: true },
        button: { type: 'reference', models: ['button'] },
        theme: { 
          type: 'enum', 
          options: [
            { label: 'Image Left', value: 'imgLeft' },
            { label: 'Image Right', value: 'imgRight' }
          ],
          default: 'imgRight',
          required: true 
        }
      }
    },
    button: {
      type: 'data',
      label: 'Button',
      labelField: 'label',
      fields: {
        label: { type: 'string', required: true },
        url: { type: 'string', required: true },
        theme: { 
          type: 'enum',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Outline', value: 'outline' }
          ],
          default: 'default',
          required: true 
        }
      }
    },
    stats: {
      type: 'data',
      label: 'Stats',
      labelField: 'heading',
      fields: {
        heading: { type: 'string', required: true },
        body: { type: 'markdown' },
        stats: { 
          type: 'list',
          items: { 
            type: 'reference',
            models: ['statItem']
          }
        }
      }
    },
    statItem: {
      type: 'data',
      label: 'Stat Item',
      labelField: 'label',
      fields: {
        label: { type: 'string', required: true },
        value: { type: 'string', required: true }
      }
    }
  },
  // Needed only for importing this repository via https://app.stackbit.com/import?mode=duplicate
  import: {
    type: 'contentful',
    contentFile: 'contentful/export.json',
    uploadAssets: true,
    assetsDirectory: 'contentful',
    spaceIdEnvVar: 'CONTENTFUL_SPACE_ID',
    deliveryTokenEnvVar: 'CONTENTFUL_DELIVERY_TOKEN',
    previewTokenEnvVar: 'CONTENTFUL_PREVIEW_TOKEN',
    accessTokenEnvVar: 'CONTENTFUL_MANAGEMENT_TOKEN',
  },
};

export default config;
