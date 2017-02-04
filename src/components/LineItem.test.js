import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import LineItem from './LineItem'
import td from 'testdouble'

describe('LineItem', () => {
  let [component, reportId, key, lineItem] = [];

  beforeEach(() => {
    reportId = "ABC123"
    key = 1
    lineItem = {
      description: 'chick peas',
      unitCost: 10000,
      quantity: 3,
    }
  })

  describe('displays', () => {
    beforeEach(() => {
      component = shallow(
        <LineItem lineItem={lineItem} key={key} id={key} />
      )
    })
    test('description', () => {
      expect(component.find('.li-description').text())
        .to.contain('chick peas')
    })
    test('unit cost', () => {
      expect(component.find('.li-unit-cost').text())
        .to.contain('10,000')
    })
    test('quantity', () => {
      expect(component.find('.li-quantity').text())
        .to.contain('x3')
    })
    test('total', () => {
      expect(component.find('.li-total').text())
        .to.contain('30,000')
    })
  })

  describe('deletes', () => {
    let [ removeLineItem ] = []

    beforeEach(() => {
      removeLineItem = td.function('removeLineItem')
      component = mount(
        <LineItem
          lineItem={lineItem}
          key={key}
          id={key}
          params={{reportId}}
          removeLineItem={removeLineItem}
        />
      )
    })

    it('fires the removeLineItem action', () => {
      component.find('button.btn-danger').simulate('click')
      td.verify(removeLineItem(reportId, key))
    })
  })
})
