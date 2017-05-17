import DownArrowIcon from '../resources/down-arrow-icon.svg'
import LevitatingLink from './LevitatingLink'
import ReactBKKLogo from '../resources/reactbkk.svg'

export default function HeroUnit () {
  return (
    <header>
      <div className='bg-overlay' />
      <div className='spacer' />
      <div className='center'>
        <HeroUnitLogo />
      </div>
      <div className='footer'>
        <HeroUnitFooter />
      </div>
      <style jsx>{`
        header {
          text-align: center;
          max-height: 750px;
          position: relative;
          background: url(static/hero-bg.jpg) center no-repeat;
          background-size: cover;
        }
        .bg-overlay {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: #222;
          opacity: 0.9;
        }
        .center {
          position: relative;
          padding-top: 160px;
        }
        .footer {
          position: relative;
          padding-bottom: 40px;
          padding-top: 80px;
        }
        @media (max-width: 639px) {
          .center { padding-top: 80px; }
          .footer { padding-top: 40px; }
        }
      `}</style>
    </header>
  )
}

function HeroUnitLogo () {
  return (
    <div>
      <div className='logo'><ReactBKKLogo /></div>
      <h1>React Bangkok</h1>
      <style jsx>{`
        h1 {
          font-size: 70px;
          font-weight: normal;
          margin: 1ex 0 0;
          color: #00D8FF;
        }
        @media (max-width: 639px) {
          h1 { font-size: 50px; }
          .logo :global(svg) { width: 196px; height: 175px; }
        }
        @media (max-width: 399px) {
          h1 { font-size: 44px; }
          .logo :global(svg) { width: 171px; height: 154px; }
        }
      `}</style>
    </div>
  )
}

function HeroUnitFooter () {
  return (
    <div className='footer'>
      <div className='nav'>
        <NavigationBar />
      </div>
      <DownArrowIcon />
      <style jsx>{`
        .nav {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  )
}

function NavigationBar () {
  return (
    <nav>
      <NavigationLink href='#about' disabled>About</NavigationLink>
      <NavigationLink href='#tickets'>Tickets</NavigationLink>
      <NavigationLink href='#sponsors' disabled>Sponsors</NavigationLink>
      <NavigationLink href='#contact' disabled>Contact</NavigationLink>
      <style jsx>{`
        nav {
          font-size: 22px;
          line-height: 30px;
        }
      `}</style>
    </nav>
  )
}

function NavigationLink ({ href, disabled, children }) {
  return (
    <span className={disabled ? 'disabled' : ''}>
      <LevitatingLink href={href}>{children}</LevitatingLink>
      <style jsx>{`
        span {
          text-transform: uppercase;
          padding: 0 2em;
        }
        .disabled {
          opacity: 0.25;
          pointer-events: none;
        }
        @media (max-width: 639px) {
          span { display: block; }
        }
      `}</style>
    </span>
  )
}