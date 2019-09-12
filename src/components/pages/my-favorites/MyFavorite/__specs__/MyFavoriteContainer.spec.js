import { mapStateToProps } from '../MyFavoriteContainer'

describe('src | components | pages | my-favorite | MyFavorite | MyFavoriteContainer', () => {
  describe('mapStateToProps()', () => {
    it('should return default props', () => {
      // given
      const ownProps = {
        favorite: {
          offerId: 'o1',
          thumbUrl: 'fake/thumb/url',
        },
        handleToggleItem: jest.fn(),
        isEditMode: false,
      }
      const offer = {
        dateRange: ['2030-07-21T20:00:00Z', '2030-08-21T20:00:00Z'],
        id: 'o1',
        isActive: true,
        isFinished: false,
        isFullyBooked: false,
        name: 'Fake offer name',
        offerType: {
          appLabel: 'Fake offer type',
        },
        venue: {
          latitude: 48.91683,
          longitude: 2.4388,
        },
      }
      const state = {
        data: {
          bookings: [
            {
              id: 'b1',
              isCancelled: false,
              stockId: 's1',
            },
          ],
          offers: [offer],
          stocks: [
            {
              id: 's1',
              beginningDatetime: '2030-08-21T20:00:00Z',
              offerId: 'o1',
            },
          ],
        },
        geolocation: {
          latitude: 48.8636537,
          longitude: 2.3371206000000004,
        },
      }

      // when
      const props = mapStateToProps(state, ownProps)

      // then
      expect(props).toStrictEqual({
        date: 'du 2030-7-21 au 2030-8-21',
        detailsUrl: '//details/o1',
        handleToggleItem: expect.any(Function),
        humanizeRelativeDistance: '10 km',
        isEditMode: false,
        name: 'Fake offer name',
        offerId: 'o1',
        offerTypeLabel: 'Fake offer type',
        status: [{ class: 'booked', label: 'Réservé' }],
        thumbUrl: 'fake/thumb/url',
      })
    })
  })
})
