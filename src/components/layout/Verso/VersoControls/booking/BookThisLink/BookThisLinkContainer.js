import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import BookThisLink from './BookThisLink'
import getPriceRangeFromStocks from '../../../../../../helpers/getPriceRangeFromStocks'
import selectIsFinishedByRouterMatch from '../../../../../../selectors/selectIsFinishedByRouterMatch'
import selectOfferByRouterMatch from '../../../../../../selectors/selectOfferByRouterMatch'
import selectStocksByOfferId from '../../../../../../selectors/selectStocksByOfferId'

const getDestinationLink = (params, url, search = '') => {
  if (params.bookings) {
    return url
  }
  return `${url}/reservation${search}`
}

export const mapStateToProps = (state, ownProps) => {
  const { match, location } = ownProps
  const { params, url } = match
  const { search } = location

  const isFinished = selectIsFinishedByRouterMatch(state, match)
  const offer = selectOfferByRouterMatch(state, match) || {}
  const stocks = selectStocksByOfferId(state, offer.id)
  const priceRange = getPriceRangeFromStocks(stocks)

  return {
    isFinished,
    priceRange,
    destinationLink: getDestinationLink(params, url, search),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(BookThisLink)