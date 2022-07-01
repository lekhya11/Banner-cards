import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <li className={`${className} banner-card-item `}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
