'use client'
import {Button, IconButton, Text} from "nebula-ds-react-library";

import dynamic from "next/dynamic";
import {useBreakpoint} from "@react-awesome/use-breakpoint";

const FramePanel = dynamic(() => import('nebula-ds-react-library').then(l => l.FramePanel), {
  ssr: false,
})

export default function Home() {

  const breakpoint = useBreakpoint()

  const buttonClassNames = (): { smallButton: string, largeButton: string } => {
    if (isMobile) {
      return {smallButton: 'min-w-12', largeButton: 'min-w-14'}
    } else {
      return {smallButton: 'min-w-24', largeButton: 'min-w-32'}
    }
  }

  const isMobile = Boolean(breakpoint.smallerOrEqual('sm'))
  const isDesktop = Boolean(breakpoint.greater('lg'))

  const openURL = (url: string) => {
    window.open(url, '_blank')?.focus();
  }

  return (
    <div className="flex flex-col flex-grow bg-background-primary ">
      <main className="container mx-auto p-2 flex flex-col flex-grow gap-8 items-center min-h-screen w-screen h-full">
        <FramePanel
          className="flex flex-col flex-grow"
          renderSideHeader={
            <IconButton
              size={isDesktop ? 'M' : 'S'}
              rounded="LTop"
              variant="standard"
              icon={<></>}
            />}
          renderSide={
            // isDesktop &&
            <>
              <IconButton
                size={isDesktop ? 'M' : 'S'}
                variant="standard"
                icon={<></>}
              />
              <IconButton
                size={isDesktop ? 'M' : 'S'}
                variant="standard"
                icon={<></>}
              />
            </>
          }
          title="Welcome"
          renderHeader={
            <>
              <Button
                size={isDesktop ? 'M' : 'S'}
                variant="outlined"
                className={buttonClassNames().smallButton}
                text=""
              />
              <Button
                size={isDesktop ? 'M' : 'S'}
                rounded="R"
                className={buttonClassNames().largeButton}
                text=""
              />
            </>
          }
          renderFooter={
            <>
              <Button
                size={isDesktop ? 'M' : 'S'}
                variant="standard"
                className={isDesktop ? buttonClassNames().largeButton : 'min-w-32'}
                text=""
              />
              <Button
                size={isDesktop ? 'M' : 'S'}
                rounded="R"
                className={isDesktop ? buttonClassNames().largeButton : 'min-w-32'}
                text=""
              />
            </>
          }
        >
          <div
            className={`flex flex-col justify-center ${isDesktop ? 'items-start px-10' : 'items-start px-4'} flex-grow pb-40`}>
            <Text variant={isMobile ? 'display2' : "display1"}>
              Nebula Design-System
            </Text>
            <Text variant={isMobile ? 'body1' : "header6"} className="w-full md:w-3/4">
              A futuristic design system inspired by 1970s space age style, Bauhaus principles, and Star Trek&apos;s LCARS
              interface
            </Text>
            <div className="flex items-center gap-4 mt-10">
              <Button
                size={isDesktop ? 'L' : 'M'}
                variant="standard"
                text="GitHub"
                onClick={()=>openURL('https://github.com/mattyx96/nebula-ds-react-library')}
              />
              <Button
                size={isDesktop ? 'L' : 'M'}
                rounded="R"
                text="Getting Started"
                onClick={()=>openURL('https://nebula-ds-react-library.irongalaxy.space')}
              />
            </div>
          </div>
        </FramePanel>
      </main>
      {/*<Horizon className="w-full" inverse/>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-black text-white">
        footer here
      </footer>*/}
    </div>
  );
}
