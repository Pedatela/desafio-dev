import React from 'react';

import avatar from '../../asset/avatar.svg'
import {FiPower} from 'react-icons/fi'

import { Container, HeaderContainer, HeaderContent, Profile } from './styles';

function Header() {
  return(
      <Container>
          <HeaderContainer>
              <HeaderContent>
                    <img src='https://www.bycoders.com.br/static/media/logo_bycoders_.e8adf476.svg' alt='Logo'/>
                    <Profile>
                        <img src={avatar} alt='Avatar'/>
                        <div>
                            <span>Bem vindo,</span>
                            <span>Lucas Pedatela</span>
                        </div>
                    </Profile>
                    <button>
                        <FiPower/>
                    </button>
              </HeaderContent>
          </HeaderContainer>
      </Container>
  );
}

export default Header;