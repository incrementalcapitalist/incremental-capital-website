import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Incremental Capital LLC</title>
        <meta 
          name="description" 
          content="Incremental Capital LLC is a proprietary trading operation/vehicle that invests for the benefit of its owner." 
        />
      </Helmet>

      {/* The content area is simplified since Layout handles structure */}
      <div className="max-w-4xl">
        <Header />
        <SignupForm />
      </div>
    </>
  )
}

export default Home