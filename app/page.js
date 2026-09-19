import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: destinations, error } = await supabase
    .from('destinations')
    .select('id,name,slug,country,city,short_description,hero_image_url')
    .eq('published', true)
    .order('sort_order', { ascending: true })
    .limit(6)

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">VOYMERA</p>
          <h1>Discover your next journey.</h1>
          <p className="lead">
            Hotels, flights, tours and travel inspiration in one place.
          </p>
        </div>
      </section>

      <section className="shell section">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>Featured destinations</h2>
          </div>
        </div>

        {error ? (
          <p className="notice">Database connection error: {error.message}</p>
        ) : destinations?.length ? (
          <div className="grid">
            {destinations.map((destination) => (
              <article className="card" key={destination.id}>
                <div>
                  <p className="country">{destination.country}</p>
                  <h3>{destination.name}</h3>
                  <p>{destination.short_description || 'Travel guide coming soon.'}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="notice">
            Voymera is connected to Supabase. Add a published destination to see it here.
          </p>
        )}
      </section>
    </main>
  )
}
