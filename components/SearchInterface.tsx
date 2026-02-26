'use client'

import { useState } from 'react'
import { 
  FaInstagram, 
  FaChrome, 
  FaTelegram, 
  FaDocker, 
  FaGithub,
  FaCloud,
  FaPrint,
  FaWifi
} from 'react-icons/fa'
import { SiCanva, SiSpacex } from 'react-icons/si'

// Type definitions
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
}

interface AppIconProps {
  icon: React.ReactNode;
  name: string;
}

interface ActionButtonProps {
  icon?: React.ReactNode;
  text: string;
}

export default function SearchInterface() {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header - Search */}
      <div className="bg-gray-50 p-6 border-b">
        <h1 className="text-3xl font-light text-gray-600 mb-4">Поиск</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full p-4 pl-12 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-4 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Recent & Today */}
        <div className="md:col-span-2 space-y-6">
          {/* Recent Section */}
          <Section title="Последние">
            <ListItem icon={<FaWifi />} text="Подключить сканер к устройству Wi-Fi..." />
            <ListItem icon={<FaPrint />} text="Настроить предпочитаемый принтер..." />
            <ListItem icon={<FaPrint />} text="Проверить текущие задания печати..." />
            <ListItem icon={<FaWifi />} text="Легкое подключение беспроводной..." />
          </Section>

          {/* Today Section */}
          <Section title="Сегодня • 26 февраля">
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Изображение дня</h3>
              <div className="bg-gradient-to-r from-orange-200 to-blue-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Grand Canyon and the Colorado River...</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Лучшие приложения</h3>
              <div className="grid grid-cols-2 gap-2">
                <AppIcon icon={<FaChrome />} name="Google Chrome" />
                <AppIcon icon={<FaTelegram />} name="Telegram Desktop" />
                <AppIcon icon={<SiSpacex />} name="Space Waves" />
                <AppIcon icon={<FaGithub />} name="Cut the Rope" />
                <AppIcon icon={<FaGithub />} name="Thief Puzzle" />
                <AppIcon icon={<FaGithub />} name="Blockbuster Puzzle" />
              </div>
            </div>
          </Section>
        </div>

        {/* Right Column - This Day, Quote, Word */}
        <div className="space-y-6">
          {/* This Day in History */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-blue-600 mb-2">В этот день в 26 февраля</h3>
            <p className="font-bold text-lg">Rogue trader breaks bank</p>
            <p className="text-gray-500 text-sm">1995</p>
          </div>

          {/* Quote of the Day */}
          <div className="bg-purple-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-purple-600 mb-2">Цитата дня:</h3>
            <p className="italic text-gray-700">"The future is much brighter than the past. Y..."</p>
            <p className="text-right text-sm text-gray-500 mt-2">Debasish Mridha</p>
          </div>

          {/* Word of the Day */}
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-green-600 mb-2">Слово дня</h3>
            <p className="font-bold text-2xl">ЕДИНСТВО</p>
            <p className="text-gray-600 text-sm">Общество, полное сходство.</p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="border-t p-4 bg-gray-50 flex flex-wrap gap-3">
        <ActionButton icon={<FaInstagram />} text="Instagram" />
        <ActionButton icon={<SiCanva />} text="Canva" />
        <ActionButton icon={<FaGithub />} text="E-MZO" />
        <ActionButton icon={<FaDocker />} text="Docker Desktop" />
        <ActionButton text="Kimi AI with K2.5 - Visua..." />
        <ActionButton icon={<FaCloud />} text="Mostly cloudy" />
      </div>
    </div>
  )
}

// Helper Components with TypeScript
function Section({ title, children }: SectionProps) {
  return (
    <div>
      <h2 className="text-xl font-medium text-gray-800 mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function ListItem({ icon, text }: ListItemProps) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
      <span className="text-gray-500">{icon}</span>
      <span className="text-gray-700">{text}</span>
    </div>
  )
}

function AppIcon({ icon, name }: AppIconProps) {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
      <span className="text-blue-500">{icon}</span>
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  )
}

function ActionButton({ icon, text }: ActionButtonProps) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full hover:bg-gray-100 transition-colors">
      {icon && <span className="text-gray-600">{icon}</span>}
      <span className="text-sm text-gray-700">{text}</span>
    </button>
  )
}