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
            return {smallButton: 'min-w-12', largeButton: 'min-w-16'}
        } else {
            return {smallButton: 'min-w-24', largeButton: 'min-w-32'}
        }
    }

    const isMobile = Boolean(breakpoint.smaller('sm'))
    const isTablet = Boolean(breakpoint.between('sm', 'lg'))
    const isDesktop = Boolean(breakpoint.greater('lg'))

    const getTitleClass = () => {
        switch (true) {
            case isMobile:
                return 'header1'
            case isTablet:
                return 'display2'
            case isDesktop:
                return 'display1'
        }
    }

    const getContentParagraphClass = () => {
        switch (true) {
            case isMobile:
                return 'body3'
            case isTablet:
                return 'body2'
            case isDesktop:
                return 'body1'
        }
    }

    const getCtaButtonSizeClass = () => {
        switch (true) {
            case isMobile:
                return 'S'
            case isTablet:
                return 'M'
            case isDesktop:
                return 'L'
        }
    }

    return (
        <div className="flex flex-col flex-grow bg-background-primary">
            <main
                className="max-w-7xl container mx-auto p-2 flex flex-col flex-grow gap-8 items-center min-h-[100dvh] w-screen h-full">
                <FramePanel
                    className="flex flex-col flex-grow py-5"
                    renderSideHeader={
                        <IconButton
                            size={isDesktop ? 'M' : 'S'}
                            rounded="LTop"
                            variant="standard"
                            icon={<></>}
                        />}
                    renderSide={
                        isDesktop &&
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
                                variant="standard"
                                className={buttonClassNames().smallButton}
                                text=""
                            />
                            <Button
                                size={isDesktop ? 'M' : 'S'}
                                variant="standard"
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
                                className={isDesktop ? buttonClassNames().largeButton : 'hidden'}
                                text=""
                            />
                            <Button
                                size={isDesktop ? 'M' : 'S'}
                                rounded="R"
                                variant="standard"
                                className={buttonClassNames().largeButton}
                                text=""
                            />
                        </>
                    }
                >
                    <div
                        className={`flex flex-col justify-center ${isDesktop ? 'items-center px-10' : 'items-start px-4'} flex-grow xl:!grid grid-cols-6`}>
                        <div className="col-span-4 -translate-y-5 lg:-translate-y-10">
                            <Text variant={getTitleClass()} className="!leading-none">
                                Nebula Design-System
                            </Text>
                            <Text variant={getContentParagraphClass()} className="w-full md:w-3/4 mt-12">
                                A retro-futuristic design system inspired by 1970s space age style, Bauhaus principles,
                                and
                                Star
                                Trek&apos;s
                                LCARS
                                interface.
                            </Text>
                            <Text variant={getContentParagraphClass()} className="w-full md:w-3/4 mt-5">
                                A UI kit library actually available for react.js.
                            </Text>
                            <div className="flex items-center gap-4 mt-10">
                                <a href="https://github.com/mattyx96/nebula-ds-react-library" target="_blank">
                                    <Button
                                        size={getCtaButtonSizeClass()}
                                        variant="standard"
                                        text="GitHub"
                                    />
                                </a>
                                <a href="https://nebula-ds-react-library.irongalaxy.space" target="_blank">
                                    <Button
                                        size={getCtaButtonSizeClass()}
                                        rounded="R"
                                        text="Explore UI Components"
                                    />
                                </a>
                            </div>
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
