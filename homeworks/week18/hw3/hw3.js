// 開始定義的資料結構如下
// const dataList = [ { todo: '輸入的資料', isCheck: false } ]

const dataList = []

function render () {
  $('.text').val('')
  $('.list').empty()
  const len = dataList.length
  for (let i = 0; i < len; i += 1) {
    if (dataList[i].isCheck === false) {
      $('.list').append(
        `<li data-num=${i}>
            <input type='checkbox' class='done'>
                ${dataList[i].todo}
            <button class='delete' >Delete</button>
            </li>`
      )
    } else {
      $('.list').append(
        `<li data-num=${i} class="checked">
            <input type='checkbox' class='done' checked>
                ${dataList[i].todo}
            <button class='delete' >Delete</button>
            </li>`
      )
    }
  }
}

$('.send').on('click', () => {
  if ($('.text').val() !== '') {
    const dataInput = $('.text')[0].value
    dataList.push({ todo: dataInput, isCheck: false })
  } else {
    alert('請先輸入資料')
  }
  render()
})

function deleteItem (e) {
  const num = $(e.target).closest('li').attr('data-num')
  if ($(e.target).hasClass('delete')) {
    dataList.splice(num, 1)
    render()
  }
}

function finished (e) {
  const num = $(e.target).closest('li').attr('data-num')
  if ($(e.target).prop('checked')) {
    dataList[num].isCheck = true
  } else {
    dataList[num].isCheck = false
  }
  render()
}

$(document).ready(() => {
  $("span[class$='.bar']").addClass('fas fa-list alt')
  $('.list').on('click', '.delete', deleteItem)
  $('.list').on('change', '.done', finished)
})
