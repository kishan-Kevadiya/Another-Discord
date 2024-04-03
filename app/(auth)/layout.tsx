
import type {Metadata} from 'next'
import LandingPage from '../../components/landing'

export const metadata: Metadata = {
    title: 'Discord | Login',
    description: 'Best Platform For Gaming Community',
  }


const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className= "h-full flex items-center justify-center">
            <LandingPage
            children={children}
            />
        </div>
    )
}


export default AuthLayout