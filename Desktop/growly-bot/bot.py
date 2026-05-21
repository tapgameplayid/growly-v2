from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackQueryHandler, ContextTypes

TOKEN = "8863855810:AAEzyx8rUfmCdjutrl4vtufd-sn2DbW6PlY"

WELCOME_PHOTO = "https://i.ibb.co/sdYLvr6w/DC56350-F-167-B-4-AB9-8794-E5-E9-B3-AD9305.png"

SERVICES = {
    "instagram": {
        "photo": "https://i.ibb.co/xqhppygR/A4-D09927-4-DB0-4202-8-F5-E-1-B404-D935765.png",
        "text": (
            "📈 РАЗВИТИЕ INSTAGRAM\n\n"
            "Мы помогаем превращать Instagram в источник клиентов и продаж.\n"
            "Наша команда занимается продвижением аккаунта, оформлением профиля, "
            "увеличением охватов, привлечением живой аудитории и созданием сильного визуального стиля.\n\n"
            "Что входит:\n"
            "• анализ аккаунта и конкурентов\n"
            "• стратегия продвижения\n"
            "• рост подписчиков и активности\n"
            "• оформление и визуал\n"
            "• продвижение Reels и контента\n"
            "• повышение доверия к бренду\n\n"
            "📩 Для консультации свяжитесь с менеджером: @growlymanager"
        ),
    },
    "tiktok": {
        "photo": "https://i.ibb.co/DP008t4s/7-FED1-A87-3252-4-FEA-98-BB-0-CD5901-A9782.png",
        "text": (
            "🔥 РАЗВИТИЕ TIKTOK\n\n"
            "Мы создаём TikTok-аккаунты, которые набирают просмотры, подписчиков и приводят клиентов. "
            "Используем современные стратегии продвижения, тренды и вирусный контент для быстрого роста.\n\n"
            "Что входит:\n"
            "• стратегия продвижения\n"
            "• идеи для вирусных роликов\n"
            "• оформление аккаунта\n"
            "• рост охватов и подписчиков\n"
            "• анализ трендов\n"
            "• продвижение бренда через TikTok\n\n"
            "📩 Для консультации свяжитесь с менеджером: @growlymanager"
        ),
    },
    "telegram": {
        "photo": "https://i.ibb.co/0R9Xxmkx/FACD8-A30-133-E-47-CF-8-BCF-1-A6-F508-F4-F8-A.png",
        "text": (
            "🚀 РАЗВИТИЕ TELEGRAM-КАНАЛА\n\n"
            "Мы помогаем Telegram-каналам расти, привлекать новую аудиторию и превращать "
            "подписчиков в клиентов. Создаём стильный визуал, выстраиваем стратегию "
            "продвижения и повышаем вовлечённость.\n\n"
            "Что входит:\n"
            "• оформление канала\n"
            "• привлечение подписчиков\n"
            "• увеличение охватов и активности\n"
            "• контент-стратегия\n"
            "• продвижение через рекламу\n"
            "• развитие личного бренда или бизнеса\n\n"
            "📩 Для консультации свяжитесь с менеджером: @growlymanager"
        ),
    },
    "youtube": {
        "photo": "https://i.ibb.co/4RVDqGwN/AEC2-B2-A2-0-D9-A-4-EDA-8-B08-15-C3-C1337-B3-C.png",
        "text": (
            "▶️ РАЗВИТИЕ YOUTUBE\n\n"
            "Помогаем развивать YouTube-каналы с нуля и выводить их на новый уровень. "
            "Работаем над оформлением, продвижением видео, удержанием аудитории и ростом просмотров.\n\n"
            "Что входит:\n"
            "• оформление канала\n"
            "• SEO-оптимизация видео\n"
            "• стратегия контента\n"
            "• увеличение просмотров и подписчиков\n"
            "• создание сильного бренда канала\n"
            "• аналитика и развитие\n\n"
            "📩 Для консультации свяжитесь с менеджером: @growlymanager"
        ),
    },
    "avatar": {
        "photo": "https://i.ibb.co/23QnLhNp/DC7-FB539-8976-4-A82-845-F-0-AECE0-E8-E2-DC.png",
        "text": (
            "🤖 СОЗДАНИЕ ИИ-АВАТАРА\n\n"
            "Создаём уникальные AI-аватары для блогеров, бизнеса и личного бренда. "
            "Такой аватар помогает выделиться, сделать контент узнаваемым и создать "
            "современный стиль вашего проекта.\n\n"
            "Что входит:\n"
            "• создание уникального образа\n"
            "• подбор стиля и внешности\n"
            "• реалистичная обработка\n"
            "• аватар под ваш бренд или нишу\n"
            "• современный AI-дизайн\n"
            "• готовый контент для соцсетей\n\n"
            "📩 Для консультации свяжитесь с менеджером: @growlymanager"
        ),
    },
    "website": {
        "photo": "https://i.ibb.co/jkwfQNNs/DB74-E707-4-CCD-417-D-9-FD9-5-C4016-A332-C6.png",
        "text": (
            "💻 СОЗДАНИЕ ЛИЧНОГО САЙТА\n\n"
            "Разрабатываем современные сайты для бизнеса, экспертов и личного бренда. "
            "Создаём стильный дизайн, удобную структуру и сайт, который помогает "
            "привлекать клиентов и увеличивать продажи.\n\n"
            "Что входит:\n"
            "• уникальный дизайн\n"
            "• адаптация под телефон и ПК\n"
            "• быстрая загрузка сайта\n"
            "• современный интерфейс\n"
            "• настройка заявок и кнопок\n"
            "• сайт под ваш бренд и цели\n\n"
            "📩 Для консультации свяжитесь с менеджером: @growlymanager"
        ),
    },
    "goals": {
        "photo": "https://i.ibb.co/y3VkMWQ/20-D78124-0-E87-471-F-8-C49-DFF1-DB1-CC7-D2.png",
        "text": (
            "🚀 У вас есть цели — у нас есть инструменты для их достижения.\n\n"
            "Мы помогаем развивать соцсети:\n"
            "• увеличение охватов и активности\n"
            "• привлечение новой аудитории\n"
            "• рост подписчиков и доверия к бренду\n"
            "• продвижение личного бренда и бизнеса\n"
            "• создание сильного визуала и контента\n"
            "• стабильный рост аккаунта без хаоса\n\n"
            "Работаем на результат и выстраиваем стратегию под ваши задачи.\n\n"
            "📩 Связаться с менеджером: @growlymanager"
        ),
    },
}

def menu():
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("📱 Развитие Instagram", callback_data="instagram")],
        [InlineKeyboardButton("🎵 Развитие TikTok", callback_data="tiktok")],
        [InlineKeyboardButton("✈️ Развитие Telegram-канала", callback_data="telegram")],
        [InlineKeyboardButton("▶️ Развитие YouTube", callback_data="youtube")],
        [InlineKeyboardButton("🤖 Создание ИИ-аватара", callback_data="avatar")],
        [InlineKeyboardButton("💻 Создание личного сайта", callback_data="website")],
        [InlineKeyboardButton("🎯 Свои цели и задачи", callback_data="goals")],
    ])

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_photo(
        photo=WELCOME_PHOTO,
        caption=(
            "👋 Добро пожаловать в Growly\n\n"
            "Мы помогаем развивать соцсети, создавать современные сайты "
            "и AI-решения для вашего бизнеса 🚀\n\n"
            "Выберите интересующую вас услугу ниже и получите подробную информацию о нашем предложении."
        ),
        reply_markup=menu(),
    )

async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    if query.data == "back":
        await query.message.delete()
        await context.bot.send_photo(
            chat_id=query.message.chat_id,
            photo=WELCOME_PHOTO,
            caption=(
                "👋 Добро пожаловать в Growly\n\n"
                "Мы помогаем развивать соцсети, создавать современные сайты "
                "и AI-решения для вашего бизнеса 🚀\n\n"
                "Выберите интересующую вас услугу ниже и получите подробную информацию о нашем предложении."
            ),
            reply_markup=menu(),
        )
        return

    service = SERVICES.get(query.data)
    if not service:
        return

    keyboard = InlineKeyboardMarkup([
        [InlineKeyboardButton("💬 Написать менеджеру", url="https://t.me/growlymanager")],
        [InlineKeyboardButton("← Назад к услугам", callback_data="back")],
    ])

    await query.message.delete()
    await context.bot.send_photo(
        chat_id=query.message.chat_id,
        photo=service["photo"],
        caption=service["text"],
        reply_markup=keyboard,
    )

app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(CallbackQueryHandler(button))

print("✅ Growly бот запущен!")
app.run_polling()