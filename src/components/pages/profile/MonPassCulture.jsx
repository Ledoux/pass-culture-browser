import PropTypes from 'prop-types'
import React from 'react'

import getAvailableBalanceByType from './utils'
import getWalletValue from '../../../utils/user/getWalletValue'
import { formatEndValidityDate } from '../../../utils/date/date'

const MonPassCulture = ({ currentUser }) => {
  const { expenses, wallet_date_created } = currentUser || {}
  const allWallet = getWalletValue(currentUser)
  const { digital, physical } = expenses
  const [digitalAvailable, physicalAvailable] = [digital, physical].map(
    getAvailableBalanceByType(allWallet)
  )
  let endValidityDate = null
  if (wallet_date_created) {
    endValidityDate = formatEndValidityDate(new Date(wallet_date_created))
  }

  return (
    <div
      className="jauges py12 text-center"
      id="profile-page-user-wallet"
    >
      <div className="text overall">
        <b
          className="is-block"
          id="profile-wallet-balance-value"
        >
          {`Il reste ${allWallet} €`}
        </b>
        <span className="is-block fs14">{'sur votre pass Culture'}</span>
      </div>
      <div className="text-containers mt12 py12 mr8">
        <div
          className="fs15"
          id="profile-physical-wallet-value"
        >
          {'Jusqu’à '}
          <b>{`${physicalAvailable} €`}</b>
          {' pour les biens culturels'}
        </div>
        <div
          className="fs15 mt12"
          id="profile-digital-wallet-value"
        >
          {'Jusqu’à '}
          <b>{`${digitalAvailable} €`}</b>
          {' pour les offres numériques'}
        </div>
        {endValidityDate && (
          <div
            className="fs15 mt12"
            id="profile-end-validity-date"
          >
            {`Votre crédit est valable jusqu’au ${endValidityDate}.`}
          </div>
        )}
      </div>
    </div>
  )
}

MonPassCulture.propTypes = {
  currentUser: PropTypes.shape().isRequired,
}

export default MonPassCulture
