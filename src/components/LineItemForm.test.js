import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import LineItemForm from './LineItemForm'
import td from 'testdouble'

describe('LineItemForm', () => {
  let [ component, reportId, description, unitCost, quantity, addLineItem ] = []
  describe('new line item', () => {
    beforeEach(() => {
      reportId = 'ABC123'
      description = 'dusty gloves'
      unitCost = 1000
      quantity = 2
      addLineItem = td.function('addLineItem')
      component = mount(
        <LineItemForm
          addLineItem={addLineItem}
          params={{reportId}}
        />
      )
    })

    it('fires the addLineItem action', () => {
      component.ref('descriptionInput').get(0).value = 'dusty gloves'
      component.ref('unitCostInput').get(0).value = '1000'
      component.ref('quantityInput').get(0).value = '2'
      component.find('button.add-line-item').simulate('click')
      td.verify(addLineItem(reportId, {
        description,
        unitCost,
        quantity
      }))
    })

    it('defaults quantity to 1', () => {
      component.ref('descriptionInput').get(0).value = 'dusty gloves'
      component.ref('unitCostInput').get(0).value = '1000'
      component.find('button.add-line-item').simulate('click')
      td.verify(addLineItem(reportId, {
        description,
        unitCost,
        quantity: 1
      }))
    })
  })
  
  test('monkey', () => {
    expect(true)
  })
})
