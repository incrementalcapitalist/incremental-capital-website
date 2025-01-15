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

      {/* Use flex-grow instead of flex-1 to allow content to expand */}
      <div className="flex flex-col flex-grow">
        {/* Main content area */}
        <div className="flex-grow max-w-4xl">
          <Header />
          <SignupForm />
        </div>
        {/* Remove the Footer from here since it's now handled by Layout */}
      </div>
    </>
  )
}

export default Home