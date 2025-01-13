import { Helmet } from 'react-helmet-async'

interface MetaTagsProps {
  title?: string
  description?: string
  path: string
}

const MetaTags: React.FC<MetaTagsProps> = ({ 
  title = 'Incremental Capital LLC',
  description = 'Incremental Capital LLC is a proprietary trading operation/vehicle that invests for the benefit of its owner.',
  path 
}) => {
  const baseUrl = 'https://www.incremental.capital'
  const url = `${baseUrl}${path}`
  const imageUrl = `${baseUrl}/images/og-image.jpg`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Incremental Capital LLC" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@incrementery" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Helmet>
  )
}

export default MetaTags