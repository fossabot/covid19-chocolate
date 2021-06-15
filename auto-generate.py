import datetime
import pytz

today = datetime.datetime.now(pytz.timezone('Asia/Tokyo'))
month = str(today.month)
day = str(today.day)
date = str(today.date())

tweet = open('tweets/' + date + '.tweet', 'w')
tweet.write(month + '月' + day + '日分のデータに更新しました。\n下記リンクより閲覧できます。\n\n【お知らせ】\nワクチンに関する情報を更新しました。\n\n当サイトでは、相模原市における新型コロナウイルスの最新情報を提供しております。\n\n#相模原市 #神奈川県 #コロナ #COVID19 \n\nhttps://t.co/ZbunvuQ341')
tweet.close()
