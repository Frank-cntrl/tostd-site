import PageHeader from '../components/PageHeader'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="From the Galleries"
        title="Gallery"
        intro="Exhibitions, artworks, and moments from two decades of shows and events across NYC and beyond. Click any photo to enlarge it."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <GalleryGrid />
      </section>
    </>
  )
}
