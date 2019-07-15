export default function (title, description) {
  return {
    title: title ? `${title} - ウェブサイトタイトル` : 'トップページタイトル',
    meta: [
      { hid: 'description', name: 'description', content: description || 'デフォルト説明文' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitterアカウント' },
      { hid: 'twitter:title', name: 'twitter:title', content: title || 'トップページタイトル' },
      { hid: 'twitter:description', name: 'twitter:description', content: description || 'デフォルト説明文' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'OGP URL' },
    ],
  }
}
