import React from 'react'
import { shallow } from 'enzyme'

import FilterByDates from '../FilterByDates'
import { TODAY_DATE } from '../utils'

const filterActionsAdd = jest.fn()
const filterActionsChange = jest.fn()
const filterActionsRemove = jest.fn()
const filterActionsReplace = jest.fn()

const initialProps = {
  filterActions: {
    add: filterActionsAdd,
    change: filterActionsChange,
    remove: filterActionsRemove,
    replace: filterActionsReplace,
  },
  filterState: {
    isNew: false,
    query: {
      categories: null,
      date: null,
      distance: null,
      jours: null,
      latitude: null,
      longitude: null,
      'mots-cles': null,
      orderBy: 'offer.id+desc',
    },
  },
  title: 'Fake title',
}

describe('src | components | pages | search | FilterByDates', () => {


  const filterActions = {
    add: filterActionsAdd,
    change: filterActionsChange,
    remove: filterActionsRemove,
    replace: filterActionsReplace,
  }
  describe('snapshot', () => {
    it('should match snapshot', () => {

      // when
      const wrapper = shallow(<FilterByDates {...initialProps} />)

      // then
      expect(wrapper).toBeDefined()
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('functions ', () => {

    // WE ADD THE DATE AT THE FIRST DAYS SEGMENTS CLICKED
    // WE REMOVE THE DATE AT THE LAST DAYS SEGMENTS CLICKED

    describe('onPickedDateChange', () => {
      describe('when a date is picked', () => {
        it('should call change function with good parameters', () => {
          // given
          const props = {
            filterActions,
            filterState: {
              isNew: false,
              query: {
                categories: null,
                date: '2018-10-24T09:15:55.098Z',
                distance: null,
                jours: '0-1',
                latitude: null,
                longitude: null,
                'mots-cles': null,
                orderBy: 'offer.id+desc',
              },
            },
            title: 'Fake title',
          }
          const pickedDate = TODAY_DATE

          // when
          const wrapper = shallow(<FilterByDates {...props} />)
          wrapper.instance().onPickedDateChange(pickedDate)
          const expected = {
            date: pickedDate.toISOString(),
            jours: '0-1',
          }

          // then
          expect(filterActionsChange).toHaveBeenCalledWith(expected)
        })
        it('should uncheck days checkboxes ', () => {
          // TODO
        })
      })
    })

    describe('onChange', () => {
      describe('when a day is checked', () => {
        describe.skip('when no days has been checked before', () => {
          it('should call ', () => {
            // given
            const props = {
              filterActions: {
                add: filterActionsAdd,
                change: filterActionsChange,
                remove: filterActionsRemove,
                replace: filterActionsReplace,
              },
              filterState: {
                isNew: false,
                query: {
                  categories: null,
                  date: null,
                  distance: null,
                  jours: null,
                  latitude: null,
                  longitude: null,
                  'mots-cles': null,
                  orderBy: 'offer.id+desc',
                },
              },
              title: 'Fake title',
            }
            const day = '0-1'
            // modifier le state pour DAYS_CHECKBOXES
            // when
            const wrapper = shallow(<FilterByDates {...props} />)
            wrapper.instance().onChange(day)
            // const callback = () => {}
            // FXME Callback inside...
            // then
            expect(filterActionsChange).toHaveBeenCalledWith('TRUC MUCHE')
            expect(filterActionsAdd).toHaveBeenCalledWith('TRUC MUCHE')
          })
        })
      })
    })
  })
})
