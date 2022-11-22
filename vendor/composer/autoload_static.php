<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita1532b98e7c2175a2c4bac6c4cb2554e
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPGraphQL\\Extensions\\OffsetPagination\\' => 38,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPGraphQL\\Extensions\\OffsetPagination\\' => 
        array (
            0 => __DIR__ . '/..' . '/valu/wp-graphql-offset-pagination/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita1532b98e7c2175a2c4bac6c4cb2554e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita1532b98e7c2175a2c4bac6c4cb2554e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita1532b98e7c2175a2c4bac6c4cb2554e::$classMap;

        }, null, ClassLoader::class);
    }
}
