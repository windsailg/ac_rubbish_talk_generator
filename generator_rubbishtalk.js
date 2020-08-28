function generateRubbishTalk(options){
    const target = {
      engineer: '工程師',
      designer: '設計師',
      entrepreneur: '創業家',
    }
    const task = {
      engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
      designer: ['畫一張圖', '改個logo ','順便幫忙設計一下','隨便換個設計'],
      entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }

    const phrase = ['很簡單', '很容易', '很快', '很正常']
    const emoji = ['😇?', '🤗?', '🤔？！', '🙄！', '😏?']

    let rubbishTalk = ''
    let randomNum = Math.floor(Math.random() * 4)
    if (options.target === 'engineer') {
        rubbishTalk += target.engineer
        rubbishTalk += task.engineer[randomNum]
    }
    if (options.target === 'designer') {
        rubbishTalk += target.designer
        rubbishTalk += task.designer[randomNum]
    }
    if (options.target === 'entrepreneur') {
        rubbishTalk += target.entrepreneur
        rubbishTalk += task.entrepreneur[randomNum]
    }
    if (rubbishTalk.length === 0 ){
      return '請先挑選想說幹話的對象噢'
    }
    rubbishTalk += phrase[randomNum]
    rubbishTalk += `吧 ${emoji[Math.floor(Math.random() * emoji.length)] }`
    return rubbishTalk
}
module.exports = generateRubbishTalk
