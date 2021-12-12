const { By, Key, Builder, WebElement } = require('selenium-webdriver')
require('chromedriver')

async function test() {
  const username = 'Admin'
  const password = 'admin123'

  const driver = await new Builder().forBrowser('chrome').build()

  await driver.get('https://opensource-demo.orangehrmlive.com/')

  await driver
    .findElement(By.name('txtUsername'))
    .sendKeys(username, Key.RETURN)
  await driver
    .findElement(By.name('txtPassword'))
    .sendKeys(password, Key.RETURN)

  const adminEl = await driver.findElement(By.id('menu_admin_viewAdminModule'))

  const jobEl = await driver.findElement(By.id('menu_admin_Job'))

  const workEl = await driver.findElement(By.id('menu_admin_workShift'))

  const actions = driver.actions({ async: true })

  await actions
    .move({ origin: adminEl })
    .move({ origin: jobEl })
    .move({ origin: workEl })
    .click()
    .perform()

  const btnAdd = await driver.findElement(By.name('btnAdd')).click()

  const shiftName = 'Holiday schedule'
  const hoursFrom = '06:00'
  const hoursTo = '18:00'

  await driver.findElement(By.name('workShift[name]')).sendKeys(shiftName)

  await driver
    .findElement(By.name('workShift[workHours][from]'))
    .sendKeys(hoursFrom)
  await driver
    .findElement(By.name('workShift[workHours][to]'))
    .sendKeys(hoursTo)

  await driver.sleep(2000)

  await driver
    .findElement(By.css('#workShift_availableEmp > option:nth-child(1)'))
    .click()

  await driver.findElement(By.id('btnAssignEmployee')).click()

  await driver.sleep(2000)

  await driver.findElement(By.name('btnSave')).click()

  const addedEl = await driver.findElement(
    By.xpath("//td[@class='left']/a[text()='Holiday schedule']")
  )
  const row = await addedEl.findElement(By.xpath('./../..'))

  if (
    (
      await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed()
    ).valueOf() &&
    (
      await row.findElement(By.xpath('td[text()="18:00"]')).isDisplayed()
    ).valueOf() &&
    (
      await row.findElement(By.xpath('td[text()="12.00"]')).isDisplayed()
    ).valueOf() &&
    (await row.findElement(By.xpath('td[1]/input')).isDisplayed()).valueOf()
  ) {
    await row.findElement(By.xpath('td[1]/input')).click()
  } else {
    throw new Error('Element is not present at the list')
  }

  await driver.sleep(2000)

  await driver.findElement(By.id('btnDelete')).click()
  await driver.findElement(By.id('dialogDeleteBtn')).click()

  try {
    await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed()
  } catch (e) {
    console.log('Element is no more present in the list')
  }

  await driver.sleep(5000)

  const title = await driver.getTitle()
  console.log('Title is:', title)

  await driver.quit()
}

test()
