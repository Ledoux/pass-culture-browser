import findOfferPictoPathByOfferType from '../findOfferPictoPathByOfferType'
import { ICONS_URL } from '../../../../../../utils/config'

describe('src | components | layout | Verso | VersoHeader | utils | findOfferPictoPathByOfferType', () => {
  it('should return an url to the matching icon when offer type is provided', () => {
    // given
    const offerType = 'EventType.SPECTACLE_VIVANT'

    // when
    const result = findOfferPictoPathByOfferType(offerType)

    // then
    expect(result).toBe(`${ICONS_URL}/picto-spectacle.svg`)
  })

  it('should return null when offer type is null', () => {
    // given
    const offerType = null

    // when
    const result = findOfferPictoPathByOfferType(offerType)

    // then
    expect(result).toBeNull()
  })
})