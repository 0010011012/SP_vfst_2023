;; Die ersten drei Zeilen dieser Datei wurden von DrRacket eingefügt. Sie enthalten Metadaten
;; über die Sprachebene dieser Datei in einer Form, die DrRacket verarbeiten kann.
#reader(lib "beginner-reader.rkt" "deinprogramm" "sdp")((modname |5|) (read-case-sensitive #f) (teachpacks ()) (deinprogramm-settings #(#f write repeating-decimal #f #t none explicit #f ())))
; Wassertemperatur nach Erhitzen berechnen, naiv
(: heat-water-0 (real real -> real))

(define heat-water-0
  (lambda (temp heat)
    (+ temp heat)))

(check-expect (heat-water-0 -10 20) 10)
(check-expect (heat-water-0 10 20) 30)
(check-expect (heat-water-0 90 20) 110)
;----------------------------------------------------------
; Wassertemperatur nach Erhitzen berechnen, mit Siedepunkt
(: heat-water-1 (real real -> real))

(define heat-water-1
  (lambda (temp heat)
    (cond
      ((>= (heat-water-0 temp heat) 100) 100)
      ((< (heat-water-0 temp heat) 100) (heat-water-0 temp heat)))))

(check-expect (heat-water-1 -10 20) 10)
(check-expect (heat-water-1 10 20) 30)
(check-expect (heat-water-1 90 20) 100)
(check-expect (heat-water-1 99 1) 100)
(check-expect (heat-water-1 99 2) 100)
;------------------------------------------------------------
; Wassertemperatur nach Erhitzen berechnen
(: heat-water (real real -> real))

(define heat-water
  (lambda (temp heat)
    (cond
    ((< temp 0) (cond
    ((< (+ temp heat) 0) (+ temp heat))
    ((<= (- (+ temp heat) 80) 0) 0)
    ((> (- (+ temp heat) 80) 100) 100)
    ((> (- (+ temp heat) 80) 0) (- (+ temp heat) 80))))
    ((>= temp 0) (cond
      ((>= (+ temp heat) 100) 100)
      ((< (+ temp heat) 100) (+ temp heat)))))))

(check-expect (heat-water 50 20) 70)
(check-expect (heat-water 10 20) 30)
(check-expect (heat-water 90 20) 100)
(check-expect (heat-water 99 1) 100)
(check-expect (heat-water 99 2) 100)
(check-expect (heat-water -10 5) -5)
(check-expect (heat-water -5 60) 0)
(check-expect (heat-water -5 90) 5)
(check-expect (heat-water -1 81) 0)
(check-expect (heat-water -1 82) 1)
(check-expect (heat-water -100 2000) 100)
(check-expect (heat-water -5 110) 25)