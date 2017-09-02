
#ifndef TIPAINT_EXPORT_H
#define TIPAINT_EXPORT_H

#ifdef TIPAINT_STATIC_DEFINE
#  define TIPAINT_EXPORT
#  define TIPAINT_NO_EXPORT
#else
#  ifndef TIPAINT_EXPORT
#    ifdef TiPaint_EXPORTS
        /* We are building this library */
#      define TIPAINT_EXPORT __declspec(dllexport)
#    else
        /* We are using this library */
#      define TIPAINT_EXPORT __declspec(dllimport)
#    endif
#  endif

#  ifndef TIPAINT_NO_EXPORT
#    define TIPAINT_NO_EXPORT 
#  endif
#endif

#ifndef TIPAINT_DEPRECATED
#  define TIPAINT_DEPRECATED 
#endif

#ifndef TIPAINT_DEPRECATED_EXPORT
#  define TIPAINT_DEPRECATED_EXPORT TIPAINT_EXPORT TIPAINT_DEPRECATED
#endif

#ifndef TIPAINT_DEPRECATED_NO_EXPORT
#  define TIPAINT_DEPRECATED_NO_EXPORT TIPAINT_NO_EXPORT TIPAINT_DEPRECATED
#endif

#if 0 /* DEFINE_NO_DEPRECATED */
#  ifndef TIPAINT_NO_DEPRECATED
#    define TIPAINT_NO_DEPRECATED
#  endif
#endif

#endif
