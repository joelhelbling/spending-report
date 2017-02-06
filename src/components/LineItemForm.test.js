import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import LineItemForm from './LineItemForm'
import td from 'testdouble'

describe('LineItemForm', () => {
  let [ component, reportId, lineItemId, description, unitCost, quantity, addLineItem, updateLineItem ] = []
  describe('new line item', () => {
    beforeEach(() => {
      reportId = 'ABC123'
      description = 'dusty gloves'
      unitCost = 1000
      quantity = 2
      addLineItem = td.function('addLineItem')
      updateLineItem = td.function('updateLineItem')
      component = mount(
        <LineItemForm
          addLineItem={addLineItem}
          updateLineItem={updateLineItem}
          params={{reportId}}
        />
      )
    })

    it('displays an "Add" button', () => {
      expect(component.find('button').text()).to.contain('Add')
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

  describe('edit line item', () => {
    beforeEach(() => {
      reportId = 'ABC123'
      lineItemId = '7'
      description = 'dusty gloves'
      unitCost = 1000
      quantity = 2
      addLineItem = td.function('addLineItem')
      updateLineItem = td.function('updateLineItem')
      component = mount(
        <LineItemForm
          addLineItem={addLineItem}
          updateLineItem={updateLineItem}
          params={{reportId}}
          id={lineItemId}
          lineItem={{
            description,
            unitCost,
            quantity,
          }}
        />
      )
    })

    it('displays an "Update" button', () => {
      expect(component.find('button').text()).to.contain('Update')
    })

    it('fires the updateLineItem action', () => {
      component.ref('quantityInput').get(0).value = '3'
      component.find('button.add-line-item').simulate('click')
      td.verify(updateLineItem(reportId, lineItemId, {
        description,
        unitCost,
        quantity: 3
      }))
    })

  })
})
