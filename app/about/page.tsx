import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Back Navigation */}
            <div className="fixed top-8 left-8 z-50">
                <Link href="/" className="group">
                    <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-4 px-6"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>

            {/* Vision Section */}
            <section className="pt-32 pb-24 border-b border-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-black mb-4">
                            A Home for Indian Athletes
                        </h1>
                        <div className="h-1 w-24 bg-red-900 mb-12"></div>
                        
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-8">
                            Vision
                        </h2>
                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                <span className="font-serif italic text-xl text-black">"The Winning Story"</span> envisions a media space where Indian athletes can authentically share their journeys – their triumphs, struggles, and the emotions that drive them.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Through compelling storytelling, we aim to amplify the voices and celebrate the achievements of all Indian athletes, regardless of mainstream attention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-24 border-b border-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-12">
                            Purpose
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-gray-300">
                                    <h3 className="font-serif text-xl font-bold text-black mb-3">
                                        Build a recognizable & authentic Indian Sports Brand
                                    </h3>
                                    <p className="text-gray-700">
                                        Establishing a distinctive voice in Indian sports media that authentically represents our athletes and their stories.
                                    </p>
                                </div>
                                <div className="pb-6 border-b border-gray-300">
                                    <h3 className="font-serif text-xl font-bold text-black mb-3">
                                        Create a safe space for Indian athletes to talk and express their true emotions on digital mediums
                                    </h3>
                                    <p className="text-gray-700">
                                        A platform where athletes can share their real experiences, vulnerabilities, and emotions without filter.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="pb-6 border-b border-gray-300">
                                    <h3 className="font-serif text-xl font-bold text-black mb-3">
                                        Educate and inspire sports fans through compelling storytelling and interviewing athletes across sports
                                    </h3>
                                    <p className="text-gray-700">
                                        Bringing diverse narratives and perspectives that educate and inspire the next generation of sports enthusiasts.
                                    </p>
                                </div>
                                <div className="pb-6">
                                    <h3 className="font-serif text-xl font-bold text-black mb-3">
                                        Eliminate the influence of the 'cricket bubble' in India & foster a more diverse and inclusive community for Indian sports
                                    </h3>
                                    <p className="text-gray-700">
                                        Breaking beyond traditional focus to celebrate all sports and create space for every athlete's story.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-4xl font-bold text-black mb-8">
                        Join Us in Telling These Stories
                    </h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
                        Be part of a movement that celebrates Indian athletes and amplifies their voices.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/gallery" className="group">
                            <Button
                                variant="outline"
                                className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase text-xs tracking-widest py-6 px-8"
                            >
                                Explore Gallery
                            </Button>
                        </Link>
                        <Link href="/story" className="group">
                            <Button
                                className="bg-red-900 hover:bg-black text-white rounded-none uppercase text-xs tracking-widest py-6 px-8"
                            >
                                Our Story
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}