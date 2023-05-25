import { MapPin } from 'phosphor-react'
import CoffeeLogo from '../../assets/Logo.png'
import { CartButton } from '../CartButton'
import { HeaderContainer } from './styles'

export function Header(){
  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="Coffee" />
      <nav>
        <a href=""><MapPin size={24} weight='fill'/>Belém, PA</a>
        <CartButton />
      </nav>
    </HeaderContainer>
  )
}
